import React from "react";
import CircleMoveAnimation from "../components/animations/CircleMoveAnimation";

export const getCircleAnimations = (pathname: string): React.ReactNode[] => {
     switch (pathname) {
          case '/':
               return [
                    <CircleMoveAnimation
                         key='home-left'
                         initialPosition="left"
                         className="top-[5rem]" />,
                    <CircleMoveAnimation
                         key='home-right'
                         initialPosition="right"
                         className="top-[20rem]" />,
                    <CircleMoveAnimation
                         key='home-bottom-left'
                         initialPosition="left"
                         className="top-[75rem]" />
               ]
          case '/catalog-detail':
               return [
                    <CircleMoveAnimation
                         key='detail-left'
                         initialPosition="left"
                         className="top-[20rem]" />,
                    <CircleMoveAnimation
                         key='detail-right'
                         initialPosition="right"
                         className="top-[75rem]" />
               ]
          default: return [
               <CircleMoveAnimation
                    key='other-right'
                    initialPosition="right"
                    className="top-[20rem]" />,
               <CircleMoveAnimation
                    key='other-left'
                    initialPosition="left"
                    className="top-[75rem]" />
          ]
     }
}
