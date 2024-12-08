
interface IAdmin extends DefaultAttributes {
  id: string | number
  email: string,
  password: string
  first_name: string,
  last_name: string,
  country: string,
  business_type: string,
  business_name: string,
  otp: string,
  user_permissions: string[]; // List of permission IDs or names
  uuid: string;
  groups: string[]; // List of group IDs or names
  is_active: boolean; // User's active status
  last_login: string | null;
}

interface IBusinessDetails extends DefaultAttributes {
  completed?: boolean;
  trading_Business_name: string,
  industry_category: string,
  phone_number: string,
  business_address: string,
  business_location: string,
  expected_transaction: string,
  business_description: string
}