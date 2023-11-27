import {CustomerRequest} from "./customer-request";

export interface PaymentRequest {
  montant?: string;
  motif?: string;
  user?: any;
  customer?: any ;

}
