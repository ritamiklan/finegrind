import { render } from '@testing-library/react-native';
import { UserContext } from '../../context/UserContext';

export const mockContextState = (options) => ({
    email: 'mock',
    favs: {},
    isLoggedIn: true,
    password: 'mock',
    uid: 'mock',
    userLoc: null,
    username: 'mock',
    setEmail: jest.fn(),
    setFavs: jest.fn(),
    setIsLoggedIn: jest.fn(),
    setPassword: jest.fn(),
    setUid: jest.fn(),
    setUserLoc: jest.fn(),
    setUsername: jest.fn(),
    ...options
});

// ? helper function to wrap components in mocked context provider
export const renderWithContextProvider = (
    component,
    mockContextState
) => {
 const ContextProvider = (props) => {
    return (
      <UserContext.Provider value={{ ...mockContextState }}>{props.children}</UserContext.Provider>
    );
  };

  return render(component, { wrapper: ContextProvider });
};