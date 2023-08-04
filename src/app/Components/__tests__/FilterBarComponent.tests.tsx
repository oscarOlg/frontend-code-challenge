import '@testing-library/jest-dom';
import {render, fireEvent} from '@testing-library/react'
import { FilterBarComponentProps } from '@/app/types';
import { userDataMock } from '../../Mocks/UsersDataMock';
import { FilterBarComponent } from '../FilterBarComponent';


describe('UserListContainer tests', () => { 
    let props: FilterBarComponentProps;

    const renderComponent  = (props: FilterBarComponentProps)  => {
        return render(<FilterBarComponent {...props} />)
    };

    let component: ReturnType<typeof renderComponent>;


    beforeEach(() => {
        props = {
            onChangeColor: () => {},
            onToggleCountrySort: () => {},
            resetData: () => {},
            handleSearchByCountry: (country: string) => {},
        };
    });
      
    afterEach(() => {
        if (component) {
          component.unmount();
        }
    });
    
    
    it('Should render FilterBarComponent correctly', () => {
        component = renderComponent(props);
        const filterBar = component.queryByTestId('filter-bar');
        expect(filterBar).toBeVisible();
        expect(component.baseElement).toMatchSnapshot();
    });

    it('Should handle clicking on change color button', () => {
        props.onChangeColor = jest.fn()
        component = renderComponent(props);
        const changeColor = component.queryByTestId('change-color-button') as HTMLButtonElement;
        expect(changeColor).toBeVisible();
        fireEvent.click(changeColor);
        expect(props.onChangeColor).toHaveBeenCalled();
    });

    it('Should handle clicking sort button', () => {
        props.onToggleCountrySort = jest.fn()
        component = renderComponent(props);
        const sortButton = component.queryByTestId('sort-button') as HTMLButtonElement;
        expect(sortButton).toBeVisible();
        fireEvent.click(sortButton);
        expect(props.onToggleCountrySort).toHaveBeenCalled();
    });

    it('Should handle clicking reset button', () => {
        props.resetData = jest.fn()
        component = renderComponent(props);
        const resetButton = component.queryByTestId('reset-button') as HTMLButtonElement;
        expect(resetButton).toBeVisible();
        fireEvent.click(resetButton);
        expect(props.resetData).toHaveBeenCalled();
    });

    it('Should handle searching by country', () => {
        props.handleSearchByCountry = jest.fn()
        component = renderComponent(props);
        const searchInput = component.queryByTestId('search-input') as HTMLInputElement;
        expect(searchInput).toBeVisible();
        fireEvent.change(searchInput, {target: {value: 'Mexico'}});
        expect(props.handleSearchByCountry).toHaveBeenCalled();
    });

});