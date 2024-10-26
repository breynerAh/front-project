import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { t } from "i18next";

const resolver = yupResolver;

const validator = yup;

const translate = t;


export { resolver, validator, translate };
