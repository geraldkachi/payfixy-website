
interface IAdmin extends DefaultAttributes {
    email: string,
    password: string
   first_name : string,
   last_name : string,
   country: string,
   business_type: string,
   business_name: string,
   otp: string,
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