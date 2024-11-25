import RegistrationSection from '@/components/registration/RegistrationSection';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const RegistrationPage = () => {
    return (
        <Wrapper>
            <main>
                <RegistrationSection/>
            </main>
        </Wrapper>
    );
};

export default RegistrationPage;