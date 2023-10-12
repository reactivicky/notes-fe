export const debounce = (fn: (...args: any) => any, time: number) => {
  let timer: NodeJS.Timeout;

  return (...args: any[]) => {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(null, args);
    }, time);
  };
};
