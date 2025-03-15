import {
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

function useMergeState<T>(
  defaultStateValue: T,
  props?: {
    defaultValue?: T;
    value?: T;
    onChange?: (value: T) => void;
  }
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const { defaultValue, value: propsValue, onChange } = props || {};

  const isFirstRender = useRef(true);

  const [stateValue, setStateValue] = useState<T>(() => {
    if (propsValue !== undefined) {
      return propsValue!;
    } else if (defaultValue !== undefined) {
      return defaultValue!;
    } else {
      return defaultStateValue;
    }
  });

  useEffect(() => {
    if (propsValue === undefined && !isFirstRender.current) {
      setStateValue(defaultValue ?? defaultStateValue);
    }

    isFirstRender.current = false;
  }, [propsValue, defaultStateValue, defaultValue]);

  const mergedValue = propsValue === undefined ? stateValue : propsValue;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  function isFunction(value: unknown): value is Function {
    return typeof value === "function";
  }

  const setState = useCallback(
    (value: SetStateAction<T>) => {
      setStateValue((prevState) => {
        const res = isFunction(value) ? value(prevState) : value;

        if (propsValue === undefined) {
          return res;
        }

        return prevState;
      });
      onChange?.(isFunction(value) ? value(mergedValue) : value);
    },
    [mergedValue, onChange, propsValue]
  );

  return [mergedValue, setState];
}

interface CalendarProps {
  value?: Date;
  defaultValue?: Date;
  onChange?: (date: Date) => void;
}

function Calendar(props: CalendarProps) {
  const { value: propsValue, defaultValue, onChange } = props;

  const [mergedValue, setValue] = useMergeState(new Date(), {
    value: propsValue,
    defaultValue,
    onChange,
  });

  return (
    <div>
      {mergedValue?.toLocaleDateString()}
      <div
        onClick={() => {
          setValue(new Date("2024-5-1"));
        }}
      >
        2023-5-1
      </div>
      <div
        onClick={() => {
          setValue(new Date("2024-5-2"));
        }}
      >
        2023-5-2
      </div>
      <div
        onClick={() => {
          setValue(new Date("2024-5-3"));
        }}
      >
        2023-5-3
      </div>
    </div>
  );
}

function App() {
  return (
    <Calendar
      defaultValue={new Date("2024-5-1")}
      onChange={(date) => {
        console.log(date.toLocaleDateString());
      }}
    />
  );
}

export default App;
