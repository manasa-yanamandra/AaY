//@vitest-environment jsdom

import {
  describe,
  it,
  expect,
  vi,
  beforeEach,
  afterEach,
  beforeAll,
} from 'vitest'
import { renderApp } from '../test-setup.tsx'
import { useAuth0 } from '@auth0/auth0-react'
import nock from 'nock'
import { Couple } from '../../models/couple.ts'

// Mock out auth0
vi.mock('@auth0/auth0-react')

const ACCESS_TOKEN = 'mock-access-token'
const mockAay = [] as Couple[]

beforeAll(() => {
  nock.disableNetConnect()

  // Add to remove errors in test output
  vi.spyOn(console, 'error').mockImplementation(() => {})
})

beforeEach(() => {
  vi.mocked(useAuth0).mockReturnValue({
    isAuthenticated: true,
    user: { sub: 'manasayanamandra96@gmail.com', nickname: 'Manasa' },
    getAccessTokenSilently: vi.fn().mockReturnValue(ACCESS_TOKEN),
    loginWithRedirect: vi.fn(),
    logout: vi.fn(),
  } as any)
})

afterEach(() => {
  vi.clearAllMocks()
})

describe('<LoginButton>', () => {
  it.only('should add a username', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/aay')
      .reply(200, mockAay)

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { user, ...screen } = renderApp('/')
    const username = await screen.findByTestId('logged in user')
    expect(scope.isDone()).toBe(true)
    expect(username.textContent).toBe('Signed in as: Manasa')
  })
})
