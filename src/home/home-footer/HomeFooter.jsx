const HomeFooter = ({current, total}) => {
    let currentCount = current 
        .filter(e => ['fail', 'almost', 'success'].includes(e))
        .length

    return <footer className="home-footer">
        {currentCount}/{total} CONCLUÍDOS
    </footer>   
}

export default HomeFooter