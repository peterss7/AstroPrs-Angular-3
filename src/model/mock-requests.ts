import { Request } from './request.model';
export const MOCK_REQUESTS: Request[] = [
  new Request(
    7,
    'Temp description 3',
    'Temp justification 3',
    '',
    'Freight',
    '03/02/2023',
    '03/15/2023',
    'PENDING',
    2914
  ),
  new Request (
    8,
    'temp description 2',
    'Temp justification 1',
    '',
    'Standard Shipping',
    '03/07/2023',
    '03/15/2023',
    'PENDING',
    4154
  ),
  new Request (
    9,
    'temp description 2',
    'Temp justification 3',
    '',
    'Freight',
    '03/04/2023',
    '03/18/2023',
    'PENDING',
    2683
  ),
  new Request (
    10,
    'Temp description 1',
    'Temp justification 3',
    'Temp rejection reason 3',
    'White-Glove',
    '03/02/2023',
    '03/18/2023',
    'REJECTED',
    2327
  ),
  new Request (
    11,
    'temp description 2',
    'Temp justification 2',
    '',
    'Standard Shipping',
    '03/06/2023',
    '03/16/2023',
    'PENDING',
    3676
  ),
  new Request(
    12,
    'Temp description 1',
    'Temp justification 3',
    '',
    'Courier',
    '03/05/2023',
    '03/21/2023',
    'APPROVED',
    2169
  )
]

