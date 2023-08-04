import '@testing-library/jest-dom';
import {render, fireEvent} from '@testing-library/react'
import { UsersListContainer } from '../UsersListContainer';
import { UserListComponentProps } from '@/app/types';
import { userDataMock } from '../../Mocks/UsersDataMock';


describe('UserListContainer tests', () => { 
    let props: UserListComponentProps;

    const renderComponent  = (props: UserListComponentProps)  => {
        return render(<UsersListContainer {...props} />)
    };

    let component: ReturnType<typeof renderComponent>;


    beforeEach(() => {
        props = {
            usersData: userDataMock,
            hasError: false,
            isDataLoading: false,
            resetData: () => {},
            handleOnDeleteClick: (id: string) => {},
            handleSearchByCountry: (country: string) => {},
        };
    });
      
    afterEach(() => {
        if (component) {
          component.unmount();
        }
    });
    
    
    it('Should render UserListContainer correctly when there is data', () => {
        component = renderComponent(props);
        const usersTable = component.queryByTestId('users-data-table');
        expect(usersTable).toBeVisible();
        expect(component.baseElement).toMatchSnapshot();
    });

    it('Should render Loading title correctly when data is loading', () => {
        props.isDataLoading = true;
        component = renderComponent(props);
        const loadingTitle = component.queryByTestId('loading-title');
        expect(loadingTitle).toBeVisible();
    });

    it('Should render error title correctly when there is an error when fetching data', () => {
        props.hasError = true;
        component = renderComponent(props);
        const errorTitle = component.queryByTestId('error-title');
        expect(errorTitle).toBeVisible();
    });

    it('Should handle delete correctly when deleting an User', () => {
        props.handleOnDeleteClick = jest.fn()
        component = renderComponent(props);
        const deleteButton = component.queryByTestId(`delete-button-${userDataMock.results[0].login.uuid}`) as HTMLButtonElement;
        expect(deleteButton).toBeVisible();
        fireEvent.click(deleteButton);
        expect(props.handleOnDeleteClick).toHaveBeenCalled();
    });

});