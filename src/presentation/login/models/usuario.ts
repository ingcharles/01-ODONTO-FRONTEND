export class Usuario {
  id!: string;
  email!: string;
  emailConfirmed!: boolean;
  passwordHash!: string;
  securityStamp!: string;
  phoneNumber!: string;
  phoneNumberConfirmed!: boolean;
  twoFactorEnabled!: boolean;
  lockoutEndDateUtc!: Date;
  lockoutEnabled!: boolean;
  accessFailedCount!: number;
  username!: string;
  password!: string;
  confirmPassword!: string;
  grantType!: string;
  iHaveClinic!: boolean;
  imProfesional!: boolean;
  licenseAgreement!: boolean;
  name?: string | null;
  lastNames!: string;
  keepConnected!: boolean;
  paymentPlanId!: number;
  clinicSpecialtyId!: number;
}
