export interface RegisterRequest {
  firstname?: string;
  lastname?: string;
  email?: string;
  dateNaiss?: string;
  lieuNaiss?: string;
  numTel?: string;
  numTuteur?: string;
  nomTuteur?: string;
  lieuResidence?: string;
  regionOrigine?: string;
  password?: string ;

  // role?: string;
  mfaEnabled?: string;
}
