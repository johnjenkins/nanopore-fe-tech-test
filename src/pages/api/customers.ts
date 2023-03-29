import { NextApiRequest, NextApiResponse } from 'next'

import customersData from '../../data/customers.json'
import { CustomersData } from '../../interfaces/customers.model'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CustomersData>
) {
  res.status(200).json(customersData)
}
