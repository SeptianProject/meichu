import React from 'react'
import BaseModal from '../modal/BaseModal'
import AuthHeading from '../../fragments/auth/AuthHeading'

interface AuthModalProps extends React.ComponentProps<typeof BaseModal> {
     title: string
}

const AuthModal: React.FC<AuthModalProps> = ({
     title,
     children,
     className = '',
     ...props
}) => {
     return (
          <BaseModal className={`w-4/5 lg:w-1/2 lg:rounded-3xl ${className}`} {...props}>
               <AuthHeading title={title} />
               {children}
          </BaseModal>
     )
}

export default React.memo(AuthModal)