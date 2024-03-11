import { useMemo } from 'react';

export const useValidation = (value, validations) => {
  return useMemo(() => {
    return Object.entries(validations).reduce(
      // validity - состояние отвечающее за валидацию инпута в целом
      // true - валидация пройдена || string - текст ошибки
      (validity, [validationType, arg]) => {
        // если есть хоть одна ошибка возвращаем ее
        if (typeof validity === 'string') return validity;

        // вызываем функцию из validationFunctions и передаем ей значение инпута и дополнительный аргумент для валидации
        return validationFunctions[validationType](value, arg);
      },
      true
    );
  }, [value, validations]);
};

const validationFunctions = {
  minLength(value, arg) {
    return value.length >= arg || `Должно быть не менее ${arg} символов.`;
  },
  isEmpty(value) {
    return value.trim() !== '' || 'Поле, обязательное для заполнения';
  },
  maxLength(value, arg) {
    return value.length < arg || `Должно быть менее ${arg} символов.`;
  },
  emailError(value) {
    const reg =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    return (
      reg.test(String(value).toLowerCase()) || 'Email не является допустимым'
    );
  },
  phoneError(value) {
    const reg =
      /^[+]?[0-9]{3}[(\s]?[0-9]{2}[)\s]?[-\s.]?[0-9]{3}([-\s.]?[0-9]{2}){2}$/i;
    return reg.test(String(value)) || 'В номере должно быть 11 цифр';
  },
};
