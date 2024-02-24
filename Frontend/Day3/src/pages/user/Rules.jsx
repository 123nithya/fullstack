import Card from '@mui/material/Card';
import i from "../../assets/Images/img1.png"
import i1 from "../../assets/Images/img2.png"
import i2 from "../../assets/Images/img3.gif"

const Rules = () => {
  return (
    <div style={{marginTop:'50px',marginBottom:'10%'}}>
      <Card elevation={3} style={{margin:'15px',padding:'50px',display:'flex',gap:'15%'}}>
        <div>
            <h1 style={{textAlign:'center'}}>Rules</h1>
            <hr style={{width:'800px',position:'relative', left:'23%'}}/>
            <h3 style={{textAlign:'center'}}>How to Play Chess: 7 Rules To Get You Started</h3>
            <br />
            <div style={{display:'flex',gap:'20px',textAlign:'justify'}}>
                <img src={i} alt="image1" />
                <p>
                    The rules of chess (also known as the laws of chess) govern the play of the game of chess. 
                    Chess is a two-player abstract strategy board game. Each player controls sixteen pieces 
                    of six types on a chessboard. Each type of piece moves in a distinct way. 
                    The object of the game is to checkmate the opponents king; checkmate 
                    occurs when a king is threatened with capture and has no escape. A game can end in various 
                    ways besides checkmate: a player can resign, and there are several ways a game can end in a draw.
                    <br />
                    While the exact origins of chess are unclear, modern rules first took form during the Middle Ages. 
                    The rules continued to be slightly modified until the early 19th century, when they reached essentially 
                    their current form. The rules also varied somewhat from region to region. Today, the standard rules 
                    are set by FIDE (Fédération Internationale des Échecs), the international governing body for chess. 
                    Slight modifications are made by some national organizations for their own purposes. There are 
                    variations of the rules for fast chess, correspondence chess, online chess, and Chess960.
                    <br />
                    Besides the basic moves of the pieces, rules also govern the equipment used, time control, conduct and 
                    ethics of players, accommodations for physically challenged players, and recording of moves using chess 
                    notation. Procedures for resolving irregularities that can occur during a game are provided as well.
                </p>
            </div>
            <div style={{position:'relative',top:'3%'}}>
                <p>Its never too late to learn how to play chess—the most popular game in the world! Learning the rules of chess is easy:</p>
                <ol style={{marginLeft:'5%'}}>
                    <li>Set Up The Chess Board</li>
                    <li>Learn To Move The Pieces</li>
                    <li>Discover The Special Rules</li>
                    <li>Learn Who Makes The First Move</li>
                    <li>Check Out The Rules On How To Win</li>
                    <li>Study The Basic Strategies</li>
                    <li>Practice Playing Lots Of Games</li>
                </ol>
                <br />
                <h1>Step 1. How To Setup The Chessboard</h1>
                <img src={i1} alt="" style={{borderRadius:'30px',marginLeft:'30%'}}/>
                <p>
                The chess pieces are then arranged the same way each time. The second row (or rank) is filled with pawns. 
                The rooks go in the corners, then the knights next to them, followed by the bishops, and finally 
                the queen, who always goes on her own matching color (white queen on white, black queen on black), 
                and the king on the remaining square.
                </p>
                <br />
                <h1>Step 2. How The Chess Pieces Move</h1>
                <p>
                Each of the 6 different kinds of pieces moves differently. Pieces cannot move through other pieces 
                (though the knight can jump over other pieces), and can never move onto a square with one of their own pieces. 
                However, they can be moved to take the place of an opponents piece which is then captured. Pieces are generally 
                moved into positions where they can capture other pieces (by landing on their square and then replacing them), 
                defend their own pieces in case of capture, or control important squares in the game.
                <h3>How to Move the King in Chess</h3>
                The king is the most important piece, but is one of the weakest. The king can only move one square in 
                any direction - up, down, to the sides, and diagonally.
                The king may never move himself into check (where he could be captured). When the king is attacked 
                by another piece this is called check.
                </p>
                <img src={i2} alt="" style={{borderRadius:'30px',marginLeft:'35%',width:'400px',height:'400px',marginTop:'10px'}}/>
                <p>
                <h3>How To Move The Queen In Chess</h3>
                The queen is the most powerful piece. She can move in any one straight direction - forward, backward, sideways, 
                or diagonally - as far as possible as long as she does not move through any of her own pieces.
                And, like with all pieces, if the queen captures an opponents piece her move is over. Notice how the white 
                queen captures the black queen and then the black king is forced to move.
                </p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />                
                <br />                
                <br />                
                <br />                
                <br />                
            </div>
        </div>
      </Card>
    </div>
  )
}

export default Rules
