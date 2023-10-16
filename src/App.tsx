// Import necessary modules and components
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './navigator';
import {Provider} from 'react-redux';
import {persistor, store} from './redux/store';
import {QueryClient, QueryClientProvider} from 'react-query';
import {PersistGate} from 'redux-persist/integration/react';
import {ActivityIndicator} from 'react-native';

// Create a new QueryClient instance for React Query
const queryClient: QueryClient = new QueryClient();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        {/* Provide a QueryClient instance to the application to use react-query */}
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            {/* The main navigation component */}
            <AppNavigator />
          </NavigationContainer>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}
