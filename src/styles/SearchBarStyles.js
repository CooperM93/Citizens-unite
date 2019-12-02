import sizes from "./sizes";

export default {
    container: {
      display: 'none',
      alignItems: 'center',
      position: 'fixed',
      zIndex: 2,
      //change the position to be on top of everything else and located right place
      height: '50px',
      overflow: 'hide',
      visibility: 'visible',
      [sizes.down('sm')] :{
          display: 'flex'
      }
    },
    expanded: {
      width: '100%',
      justifyContent: 'center',
      transition: 'all 90ms linear',
      transform: `translate(350, 0)`,
    },
    minimized: {
      alignItems: 'center',
      justifyContent: `flex-start`,
      transition: 'transform 90ms linear',
      marginLeft: '-350px',
    },
    scrolling: {
      transform: `translate(0, -70px)`,
      transition: 'transform 90ms linear',
    },
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        backgroundColor: "RGBA(24,27,28,0.85)",
    },
      input: {
        marginLeft: '10px',
        flex: 1,
        color: 'white',
    },
      iconButton: {
        padding: 10,
        color: 'white',
    },
      divider: {
        height: 28,
        margin: 4,
        backgroundColor: 'white'
        //make the divider the light color (props not working)
    },
};