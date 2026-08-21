import React from 'react'

export const PageTitle = ({ title }) => {
  return (
    <>
      {/* Desktop: vertical on the left side */}
      <div className="page-title-vertical">
        <span>{title}</span>
      </div>

      {/* Mobile: horizontal on top */}
      <div className="page-title-horizontal">
        <span>{title}</span>
      </div>
    </>
  )
}