export interface Customer {
  id: number
  first_name: string
  last_name: string
  job_title: string
  email: string
  start_date: string
  account_roles: AccountRole[]
}

export interface AccountRole {
  id: number
  role: string
}

export interface CustomersData {
  customers: Customer[]
}
