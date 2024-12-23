import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { setIsAuthModalOpen } from "../redux/slices/authSlice";

interface ProtectedRouteProps {
     children: React.ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = React.memo(({ children }) => {
     const location = useLocation()
     const dispatch = useAppDispatch()
     const { isAuthenticated } = useAppSelector((state) => state.auth)

     React.useEffect(() => {
          if (!isAuthenticated) {
               dispatch(setIsAuthModalOpen(true))
          }
     }, [isAuthenticated, dispatch])

     if (!isAuthenticated) {
          return <Navigate to='/' state={{ from: location }} replace />
     }

     return <>{children}</>
})

export default ProtectedRoute;