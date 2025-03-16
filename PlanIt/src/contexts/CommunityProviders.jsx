import { CommunityFilterProvider } from "./CommunityFilterContext"
import { CurrentLocationProvider } from "./CurrentLocationContext"
import { SearchModalProvider } from "./SearchModalContext"

export const CommunityProvider = ({ children }) => {
    return (
        <CurrentLocationProvider>
            <CommunityFilterProvider>
                <SearchModalProvider>
                    {children}
                </SearchModalProvider>
            </CommunityFilterProvider>
        </CurrentLocationProvider>
    );
};