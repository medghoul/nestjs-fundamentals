export class CreateUserDto {
  // readonly means that the property is readonly and cannot be changed
  readonly userName: string;
  readonly password: string;
  readonly phone: string;
  // no business logic in the DTO
}
