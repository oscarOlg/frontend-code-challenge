export interface UserListComponentProps {
    usersData?: UserData;
    hasError: boolean;
    isDataLoading: boolean;
    resetData: () => void;
    handleOnDeleteClick: (id: string) => void;
    handleSearchByCountry: (country: string) => void;
}

export interface FilterBarComponentProps {
    onChangeColor: () => void;
    onToggleCountrySort: () => void;
    resetData: () => void;
    handleSearchByCountry: (country: string) => void;
}

export interface UserData {
    results: User[];
}

export interface User {
    name: Name;
    location: Location; 
    picture: Picture;
    login: Login;
}

export interface Name {
    title: string;
    first: string;
    last: string;
}

export interface Location {
    country: string;
}

export interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
}

export interface Login {
    uuid: string;
}