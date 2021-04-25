import * as yup from 'yup'
const FILE_SIZE = 1.6e+7
export const contactFormValidation = yup.object().shape({
    name: yup.string()
        .trim('В имени не должно быть пробелов')
        .strict()
        .required('Введите ваше имя')
        .min(2, 'Имя должно быть не менее 2 букв')
        .matches(/^[а-яА-ЯЁё]+$/, 'Имя должно состоять из русских букв и не иметь цифр')
        .max(20, 'Имя должно быть не более 20 букв'),
    surname: yup.string()
        .trim('В фамилии не должно быть пробелов')
        .strict()
        .required('Введите вашу фамилию')
        .min(2, 'Фамилия должна быть не менее 2 букв')
        .matches(/^[а-яА-ЯЁё]+$/, 'Фамилия должна состоять из русских букв и не иметь цифр')
        .max(20, 'Фамилия должна быть не более 20 букв'),
    email: yup.string()
        .trim('В почте не должно быть пробелов')
        .strict()
        .email('Неправильный email адрес')
        .required('Введите ваш email'),
    sex: yup.string()
        .required('Укажите пол'),
    confidentiality_check: yup.boolean()
        .oneOf([true], 'Вы должны согласиться с правилами')
        .required('Это обязательный пункт'),
    file: yup.mixed()
        .test({name: 'fileSize', message: "Загружайте файл размером не более 16 mb", test: value => {
            if (value === undefined) {
                return true
            }
            return value?.size <= FILE_SIZE
        }}),
    // github_link: yup.string()
    //     .trim('В ссылке не должно быть пробелов')
    //     .strict()
    //     .required('Введите ваш github')
    //     .matches(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/, 'Это не похоже на url'),
});
