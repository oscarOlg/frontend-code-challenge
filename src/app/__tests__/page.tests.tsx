import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom';
import { Home } from "../page";


describe('Home tests', () => { 
    it('Should render Home title correctly', () => {
        const component = render(<Home />);
        const title = screen.getByText('Users list');
    
        expect(title).toBeInTheDocument();
    });
});