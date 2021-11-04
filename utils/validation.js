import I18n from '../i18n'
// import I18n from "i18next";

export const REQUIRED = ({
  required: {
    value: true,
    message: I18n.t('required')
  }
});
export const EMAIL = ({
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: I18n.t('email.invalid')
  }
});
export const PHONE = ({
  pattern: {
    value: /([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/,
    message: I18n.t('validate.phoneInvalid')
  }
});
