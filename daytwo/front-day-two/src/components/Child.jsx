const Child = ({children}) => { // all props have a children property that allows html to be passed into them by the parent and then later used
    return (
        <>
            <div className="backgroundTile">
                {children}
            </div>
        </>
    )
}

export default Child;