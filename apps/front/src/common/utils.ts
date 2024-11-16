import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const resolver = yupResolver;

const validator = yup;

export { resolver, validator };
