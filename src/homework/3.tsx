import React, { useState } from "react";

export function FormComponent() {
  const [value, setValue] = useState("");

  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(target.value);
  };
  return <input type="text" value={value} onChange={handleChange} />;
}

// Как типизировать деструктуризированные объекты?
// Для себя нашел такой лайфхак: если передать в анонимную функцию содержимое handler, то TS
// сам подсветит нужные типы, но это срабатывает не всегда, как например в этой ситуации.
// В этой ситуации, я хочу деструктуризировать target из event, в анонимном обработчике по моему "методу"
// onChange={({ target }) => setValue(target.value)} тип для target: (parameter) target: EventTarget & HTMLInputElement,
// но если я это переношу в сам handleChange - это не работает.
// Конкретно в этой ситуации TS согласился на такую же типизацию как и event, но это срабатывает не всегда?
