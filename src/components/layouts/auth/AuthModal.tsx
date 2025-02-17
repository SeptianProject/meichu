import React from 'react'
import BaseModal from '../modal/BaseModal'
import AuthHeading from '../../fragments/auth/AuthHeading'

interface AuthModalProps extends React.ComponentProps<typeof BaseModal> {
     title: string
}

const AuthModal: React.FC<AuthModalProps> = ({
     title,
     children,
     ...props
}) => {
     return (
          <BaseModal isAuthModal  {...props}>
               <AuthHeading title={title} />
               {children}
          </BaseModal>
     )
}

export default React.memo(AuthModal)