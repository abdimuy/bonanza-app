interface Payment {
  cant: number;
  clientLastName: string;
  clientName: string;
  date: string;
  employee: string;
  id: string;
  location: Location;
  noCuenta: number;
  ruta: number;
  saldoBefore: Saldo;
  takeInOffice: boolean;
}

interface Location {
  lat: number;
  lon: number;
}

interface Saldo {
  saldoActual_contado: number;
  saldoActual_long_term: number;
  saldoActual_short_term: number;
}

interface ProductSale {
  cant: number;
  date: string;
  enganche: number;
  id: string;
  idProduct: string;
  name: string;
  price_contado: number;
  price_long_term: number;
  price_short_term: number;
  ruta: number;
}

interface Seller {
  _snippetResult: null;
  lastName: string;
  name: string;
  objectID: string;
  phoneNumber: string;
  workPosition: string;
}

interface InfoClient {
  city: string;
  colonia: string;
  cp: string[];
  id: string;
  lastName: string;
  name: string;
  phoneNumber: string;
  state: string;
  street: string;
}

export interface Sale {
  id: string;
  acumPagos: number;
  amountPay: string;
  cantPay: number;
  currentPayment: string;
  date: string;
  dayPay: string;
  discount: number;
  enganche: number;
  infoClient: InfoClient;
  locations: Location[];
  noCuenta: number;
  nota: string;
  numberToOrder: number;
  pagos: Payment[];
  payContado: number;
  productsSale: ProductSale[];
  seller: Seller[];
  status: string;
  total_contado: number;
  total_long_term: number;
  total_short_term: number;
  typeAccount: string;
  visits: any[];
}
