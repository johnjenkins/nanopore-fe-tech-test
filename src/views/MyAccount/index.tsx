import * as React from 'react'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faHouse,
  faList,
  faFolder,
  faUser,
  faBell
} from '@fortawesome/free-solid-svg-icons'
import ALink from 'components/ALink'
import Button from 'components/Button'
import HorizontalMenuItem from 'components/HorizontalMenuItem'
import Image from 'next/image'
import Link from 'next/link'

import Container from '../../components/Container'
import {
  Account,
  AccountRole,
  AccountsData
} from '../../interfaces/accounts.model'
import { Customer, CustomersData } from '../../interfaces/customers.model'
import {
  Logo,
  Header,
  Contents,
  MenuWrapper,
  UserWrapper,
  LogoWrapper,
  UserDetails,
  Navigation,
  LeftSidebar,
  Main,
  StyledFaIcon,
  Table,
  StyledButton,
  RoleDropdown
} from './styles'

library.add(faHouse, faFolder, faList, faUser, faBell)

const MyAccount: React.FC = () => {
  const [accounts, setAccounts] = React.useState<Account[]>([])
  const [customers, setCustomers] = React.useState<Customer[]>([])

  const [currentAccount, setCurrentAccount] = React.useState<Account | null>(
    null
  )
  const [currentUser, setCurrentUser] = React.useState<Customer>({
    id: 0,
    first_name: 'Jan',
    last_name: 'Sargsyan',
    job_title: 'Software Developer',
    email: 'jan@jan.jan',
    start_date: '01-01-1990',
    account_roles: [
      // Acme Inc.
      {
        id: 1,
        role: 'member'
      },
      // Globex
      {
        id: 2,
        role: 'admin'
      },
      // Hooli
      {
        id: 3,
        role: 'leader'
      },
      // Initech
      {
        id: 4,
        role: 'leader'
      }
    ]
  })

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await fetch('/api/accounts')
        const data: AccountsData = await response.json()
        setAccounts(data.accounts)
      } catch (error) {
        console.error('Failed to fetch accounts', error)
      }
    }
    fetchAccounts()

    const fetchCustomers = async () => {
      try {
        const response = await fetch('/api/customers')
        const data: CustomersData = await response.json()
        setCustomers(data.customers)
      } catch (error) {
        console.error('Failed to fetch customers', error)
      }
    }
    fetchCustomers()
  }, [])

  const currentUserRoleInCurrentAccount = currentAccount
    ? currentUser.account_roles.find((role) => role.id === currentAccount.id)
        ?.role
    : null

  const handleAccountChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const accountId = parseInt(event.target.value)
    const account = accounts.find((a) => a.id === accountId)
    setCurrentAccount(account || null)
  }

  const handleRoleChange = (
    customerId: number,
    roleId: number,
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const updatedCustomers = customers.map((customer) => {
      if (customer.id === customerId) {
        const updatedRoles = customer.account_roles.map((role) => {
          if (role.id === roleId) {
            role.role = event.target.value as AccountRole['role']
          }
          return role
        })
        return {
          ...customer,
          account_roles: updatedRoles
        }
      }
      return customer
    })
    setCustomers(updatedCustomers)
    toast.success('Role changed!')
  }

  const handleInvite = () => {
    // TODO: Implement invite logic
    toast.warning('TODO: Add second screen for inviting.')
  }
  const handleDelete = (customerId: number, accountId: number) => {
    const updatedCustomers = customers.map((customer) => {
      if (customer.id === customerId) {
        const updatedRoles = customer.account_roles.filter(
          (role) => role.id !== accountId
        )
        return {
          ...customer,
          account_roles: updatedRoles
        }
      }
      return customer
    })
    setCustomers(updatedCustomers)
    toast.success('Member deleted!')
  }

  const filteredAccounts = accounts.filter((account) => {
    return currentUser.account_roles.some((role) => role.id === account.id)
  })

  const filteredCustomers = currentAccount
    ? customers.filter((customer) =>
        customer.account_roles.some((role) => role.id === currentAccount.id)
      )
    : []

  return (
    <Container>
      <LogoWrapper>
        <Link href="/">
          <Logo src="/img/ont-logo.svg" alt="Oxford nanopore Tech logo" />
        </Link>
      </LogoWrapper>
      <Header>
        <UserWrapper>
          <UserDetails>
            <div>
              <Image
                src="https://picsum.photos/50/50"
                width={50}
                height={50}
                alt="User's Avatar"
              />
            </div>
            <div className="userDetails">
              <div>{currentUser.first_name + ' ' + currentUser.last_name}</div>
              <div>
                {currentUserRoleInCurrentAccount?.replace(/^\w/, (c) =>
                  c.toUpperCase()
                ) || 'Select account below'}
              </div>
            </div>
          </UserDetails>
          <select
            id="account-select"
            data-testid="account-select"
            onChange={handleAccountChange}
          >
            <option value="">Select an account</option>
            {filteredAccounts.map((account) => (
              <option key={account.id} value={account.id}>
                {account.organisation_name}
              </option>
            ))}
          </select>
        </UserWrapper>

        <MenuWrapper>
          <h1>Accounts</h1>
          <h2>
            {(currentAccount && currentAccount.organisation_name) ||
              'Select account below'}
          </h2>
        </MenuWrapper>
      </Header>
      <Contents>
        <LeftSidebar>
          <ul>
            <li>
              <HorizontalMenuItem href="/">
                <StyledFaIcon icon={faHouse} height={18} color="#015872" />
                Dashboard
              </HorizontalMenuItem>
            </li>
            <li>
              <HorizontalMenuItem href="#0">
                <StyledFaIcon icon={faList} height={18} color="#015872" />
                Orders
              </HorizontalMenuItem>
            </li>
            <li>
              <HorizontalMenuItem href="#0">
                <StyledFaIcon icon={faFolder} height={18} color="#015872" />
                Products
              </HorizontalMenuItem>
            </li>
          </ul>
          <hr />
          <ul>
            <li>
              <HorizontalMenuItem href="#0" className="active">
                <StyledFaIcon icon={faUser} height={18} color="#015872" />
                Accounts
              </HorizontalMenuItem>
            </li>
            <li>
              <HorizontalMenuItem href="#0">
                <StyledFaIcon icon={faBell} height={18} color="#015872" />
                Notifications
              </HorizontalMenuItem>
            </li>
          </ul>
        </LeftSidebar>
        <Main>
          {(currentAccount && (
            <>
              {currentUserRoleInCurrentAccount === 'leader' && (
                <StyledButton
                  onClick={() => handleInvite()}
                  style={{ marginBottom: 20, float: 'right' }}
                >
                  Create new account
                </StyledButton>
              )}
              {filteredCustomers.length > 0 ? (
                <Table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Job Title</th>
                      {currentUserRoleInCurrentAccount === 'admin' ||
                      currentUserRoleInCurrentAccount === 'leader' ? (
                        <th>Role</th>
                      ) : null}
                      {currentUserRoleInCurrentAccount === 'leader' ? (
                        <th>Actions</th>
                      ) : null}
                    </tr>
                  </thead>
                  <tbody>
                    {filteredCustomers.map((customer) => (
                      <tr key={customer.id}>
                        <td>
                          {customer.first_name} {customer.last_name}
                        </td>
                        <td>{customer.job_title}</td>
                        {(currentUserRoleInCurrentAccount === 'admin' ||
                          currentUserRoleInCurrentAccount === 'leader') && (
                          <td>
                            <RoleDropdown
                              value={
                                customer.account_roles.find(
                                  (r) => r.id === currentAccount.id
                                )?.role || 'member'
                              }
                              onChange={(event) =>
                                handleRoleChange(
                                  customer.id,
                                  currentAccount.id,
                                  event
                                )
                              }
                              disabled={
                                customer.account_roles.find(
                                  (r) => r.id === currentAccount.id
                                )?.role === 'leader' &&
                                currentUserRoleInCurrentAccount !== 'leader'
                              }
                            >
                              <option value="member">Member</option>
                              <option value="leader">Leader</option>
                              <option value="admin">Admin</option>
                            </RoleDropdown>
                          </td>
                        )}
                        {currentUserRoleInCurrentAccount === 'leader' && (
                          <td>
                            <StyledButton
                              onClick={() =>
                                handleDelete(customer.id, currentAccount.id)
                              }
                            >
                              Delete
                            </StyledButton>
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </Table>
              ) : (
                <h2>No other members in this account</h2>
              )}
            </>
          )) || <h2>Select account from dropdown above</h2>}
        </Main>
      </Contents>
      <Navigation>
        <ALink href="/" passHref>
          <Button>Home</Button>
        </ALink>
      </Navigation>
    </Container>
  )
}

export default MyAccount
