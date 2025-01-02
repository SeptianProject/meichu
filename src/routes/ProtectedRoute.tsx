import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { setIsAuthModalOpen } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
     const navigate = useNavigate()
     const dispatch = useAppDispatch()
     const { isAuthenticated, token, userId } = useAppSelector((state) => state.auth)

     React.useEffect(() => {
          if (!isAuthenticated && !token && !userId) {
               dispatch(setIsAuthModalOpen(true))
               navigate('/', { replace: true })
          }
     }, [token, userId, isAuthenticated, dispatch, navigate])

     if (!isAuthenticated && !token && !userId) {
          return null
     }

     return <>{children}</>
}

export default ProtectedRoute;