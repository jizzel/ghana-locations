import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from "class-validator";
import { isValidRegion, isValidCity } from "../index";

@ValidatorConstraint({ name: "isGhanaRegion", async: false })
export class IsGhanaRegionConstraint implements ValidatorConstraintInterface {
  validate(value: any) {
    return typeof value === "string" && isValidRegion(value);
  }
  defaultMessage() {
    return "Invalid Ghana region name or slug";
  }
}

export function IsGhanaRegion(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsGhanaRegionConstraint,
    });
  };
}

@ValidatorConstraint({ name: "isGhanaCity", async: false })
export class IsGhanaCityConstraint implements ValidatorConstraintInterface {
  validate(city: any, args: ValidationArguments) {
    const [regionField] = args.constraints;
    const region = (args.object as any)[regionField];
    return typeof city === "string" && isValidCity(region, city);
  }
  defaultMessage(args: ValidationArguments) {
    return `Invalid city for the specified region (${args.constraints[0]})`;
  }
}

export function IsGhanaCity(
  regionField: string,
  validationOptions?: ValidationOptions
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [regionField],
      validator: IsGhanaCityConstraint,
    });
  };
}

@ValidatorConstraint({ name: "isGhanaLocation", async: false })
export class IsGhanaLocationConstraint implements ValidatorConstraintInterface {
  validate(value: any) {
    return (
      value &&
      typeof value.region === "string" &&
      typeof value.city === "string" &&
      isValidCity(value.region, value.city)
    );
  }
  defaultMessage() {
    return "Invalid Ghana location (region and city combination)";
  }
}

export function IsGhanaLocation(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsGhanaLocationConstraint,
    });
  };
}
