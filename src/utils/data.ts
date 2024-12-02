interface Option {
    value: string;
    label: string;
}
export const optionBankList: Option[] = [
    { value: "access_bank", label: "Access Bank" },
    { value: "gtbank", label: "Guaranty Trust Bank (GTBank)" },
    { value: "zenith_bank", label: "Zenith Bank" },
    { value: "uba", label: "United Bank for Africa (UBA)" },
    { value: "fidelity_bank", label: "Fidelity Bank" },
    { value: "first_bank", label: "First Bank of Nigeria" },
    { value: "stanbic_ibtc", label: "Stanbic IBTC Bank" },
    { value: "ecobank", label: "Ecobank Nigeria" },
    { value: "polaris_bank", label: "Polaris Bank" },
    { value: "union_bank", label: "Union Bank of Nigeria" },
];


export const optionIndustryTypes: Option[] = [
    { value: "restaurant", label: "Restaurant" },
    { value: "retail", label: "Retail" },
    { value: "technology", label: "Technology" },
    { value: "healthcare", label: "Healthcare" },
    { value: "finance", label: "Finance" },
];

export const optionLocations: Option[] = [
    { value: "new_york", label: "New York" },
    { value: "san_francisco", label: "San Francisco" },
    { value: "los_angeles", label: "Los Angeles" },
    { value: "chicago", label: "Chicago" },
    { value: "lagos", label: "Lagos" },
    { value: "abuja", label: "Abuja" },
    { value: "port_harcourt", label: "Port Harcourt" },
];

export const optionTransactionVolumes: Option[] = [
    { value: "10.0", label: "Less than $1,000" },
    { value: "20.0", label: "$1,000 - $5,000" },
    { value: "30.0", label: "$5,000 - $10,000" },
    { value: "10000.0", label: "More than $10,000" },
];



export const optionRoles = [
    { value: "business_owner", label: "Business Owner" },
    { value: "director", label: "Director" },
    { value: "shareholder", label: "Shareholder" },
];

export const optionShareOwnership = [
    { value: "majority", label: "Majority Owner" },
    { value: "minority", label: "Minority Owner" },
];

export const optionGovtIdTypes = [
    { value: "national_id", label: "National ID" },
    { value: "passport", label: "Passport" },
    { value: "driver_license", label: "Driver's License" },
];