import { createI18n } from "vue-i18n";

export default ({app}) =>{
    const i18n=createI18n({
        locale:'en-US'
    });
   app.use(i18n);

}