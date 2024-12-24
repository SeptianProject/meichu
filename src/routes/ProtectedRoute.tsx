import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { setIsAuthModalOpen } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
     children: React.ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = React.memo(({ children }) => {
     const navigate = useNavigate()
     const dispatch = useAppDispatch()
     const { isAuthenticated, token, userId } = useAppSelector((state) => state.auth)

     React.useEffect(() => {
          if (!isAuthenticated && !token && !userId) {
               dispatch(setIsAuthModalOpen(true))
          }
     }, [token, userId, isAuthenticated, dispatch])

     if (!isAuthenticated && !token && !userId) {
          return navigate('/', { replace: true })
     }

     return <>{children}</>
})

export default ProtectedRoute;