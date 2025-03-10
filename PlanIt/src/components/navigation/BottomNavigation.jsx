import styled from '@emotion/styled';
import { Home, Globe, Users, Send, Settings } from 'lucide-react';

const NavContainer = styled.div`
    width: 100%;
    background-color: #f5f5f5;
    padding: 8px 0;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    position: fixed;
    bottom: 0;
    left: 0;
`;

const NavInner = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
`;

const NavItem = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    margin-bottom: 15px;
`;

const IconWrapper = styled.div`
    padding: 8px;
    color: ${props => props.active ? '#4285F4' : '#666'};
`;

const Label = styled.span`
    font-size: 14px;
    margin-top: 4px;
    color: ${props => props.active ? '#4285F4' : '#666'};
    font-weight: ${props => props.active ? '500' : 'normal'};
`;

const BottomNavigation = ({ activeTab = 'home'}) => {
    const tabs = [
        // path 는 임의로 해놓은거라 추후에 결정합시다!
        { id: 'home', label: 'Home', icon: Home, path: '/' },
        { id: 'trips', label: 'My Trips', icon: Globe, path: '/trips' },
        { id: 'community', label: 'Community', icon: Users, path: '/community' },
        { id: 'message', label: 'message', icon: Send, path: '/messages' },
        { id: 'account', label: 'Accont', icon: Settings, path: '/account' },
    ];

    return (
        <NavContainer>
            <NavInner>
                {tabs.map((tab) => (
                    <NavItem key={tab.id} href={tab.path}>
                        <IconWrapper active={activeTab === tab.id}>
                            <tab.icon size={24} color={activeTab === tab.id && tab.id === 'community' ? '#4285F4' : undefined} />
                        </IconWrapper>
                        <Label active={activeTab === tab.id}>
                            {tab.label}
                        </Label>
                    </NavItem>
                ))}
            </NavInner>
        </NavContainer>
    );
};

export default BottomNavigation;