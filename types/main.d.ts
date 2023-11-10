type LoadingLocationState = {
    state: 'Loading';
};
type SuccessLocationState = {
    state: 'Success';
    coords: {
        lat: number;
        lon: number;
    };
};
type ErrorLocationState = {
    state: 'Error';
    error: {
        message: string;
    };
};
type LocationState = LoadingLocationState | SuccessLocationState | ErrorLocationState;
declare function printLocation(location: LocationState): void;
//# sourceMappingURL=main.d.ts.map