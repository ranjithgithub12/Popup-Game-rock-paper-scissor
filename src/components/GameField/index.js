import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  GameContainer,
  ScoreBoardContainer,
  GameItemContaier,
  GameHeading,
  GameScoreContainer,
  ScoreHeading,
  TotalScore,
  GameImageContianer,
  GameButton,
  GameImage,
  GameResultContainer,
  YouAndOppentContainer,
  Heading,
  ResultImage,
  ResultContent,
  PlayAgainButton,
  PopupContainer,
  PopupButton,
  RulesContainer,
  CloseButton,
  RulesImage,
} from './styledComponent'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class GameField extends Component {
  state = {
    score: 0,
    gameBoard: true,
    yourChoiceUrl: '',
    oppentUrl: '',
    gameResult: '',
  }

  onClickRock = () => {
    const yourId = choicesList[0].id
    const yourUrl = choicesList[0].imageUrl

    const randomNumber = Math.floor(Math.random() * 3)
    const randomList = choicesList[randomNumber]
    const {id, imageUrl} = randomList

    if (yourId === id) {
      this.setState({gameResult: 'IT IS DRAW'})
    } else if (yourId === 'ROCK' && id === 'SCISSORS') {
      this.setState({gameResult: 'YOU WON'})
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
    } else if (yourId === 'ROCK' && id === 'PAPER') {
      this.setState({gameResult: 'YOU LOSE'})
      this.setState(prevState => ({
        score: prevState.score - 1,
      }))
    }

    this.setState({
      yourChoiceUrl: yourUrl,
      oppentUrl: imageUrl,
      gameBoard: false,
    })
  }

  onClickScissors = () => {
    const yourId = choicesList[1].id
    const yourUrl = choicesList[1].imageUrl

    const randomNumber = Math.floor(Math.random() * 3)
    const randomList = choicesList[randomNumber]
    const {id, imageUrl} = randomList

    if (yourId === id) {
      this.setState({gameResult: 'IT IS DRAW'})
    } else if (yourId === 'SCISSORS' && id === 'PAPER') {
      this.setState({gameResult: 'YOU WON'})
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
    } else if (yourId === 'SCISSORS' && id === 'ROCK') {
      this.setState({gameResult: 'YOU LOSE'})
      this.setState(prevState => ({
        score: prevState.score - 1,
      }))
    }
    this.setState({
      yourChoiceUrl: yourUrl,
      oppentUrl: imageUrl,
      gameBoard: false,
    })
  }

  onClickPaper = () => {
    const yourId = choicesList[2].id
    const yourUrl = choicesList[2].imageUrl

    const randomNumber = Math.floor(Math.random() * 3)
    const randomList = choicesList[randomNumber]
    const {id, imageUrl} = randomList

    if (yourId === id) {
      this.setState({gameResult: 'IT IS DRAW'})
    } else if (yourId === 'PAPER' && id === 'ROCK') {
      this.setState({gameResult: 'YOU WON'})
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
    } else if (yourId === 'PAPER' && id === 'SCISSORS') {
      this.setState({gameResult: 'YOU LOSE'})
      this.setState(prevState => ({
        score: prevState.score - 1,
      }))
    }

    this.setState({
      yourChoiceUrl: yourUrl,
      oppentUrl: imageUrl,
      gameBoard: false,
    })
  }

  onClickPlayAgain = () => {
    this.setState({gameBoard: true})
  }
  gameImageContainer = () => (
    <GameImageContianer>
      <GameButton data-testid="rockButton" onClick={this.onClickRock}>
        <GameImage src={choicesList[0].imageUrl} alt={choicesList[0].id} />
      </GameButton>
      <GameButton data-testid="scissorsButton" onClick={this.onClickScissors}>
        <GameImage src={choicesList[1].imageUrl} alt={choicesList[1].id} />
      </GameButton>
      <GameButton data-testid="paperButton" onClick={this.onClickPaper}>
        <GameImage src={choicesList[2].imageUrl} alt={choicesList[2].id} />
      </GameButton>
    </GameImageContianer>
  )

  gameResultContainer = () => {
    const {yourChoiceUrl, oppentUrl, gameResult} = this.state
    return (
      <>
        <GameResultContainer>
          <YouAndOppentContainer>
            <Heading>YOU</Heading>
            <ResultImage src={yourChoiceUrl} alt="your choice" />
          </YouAndOppentContainer>
          <YouAndOppentContainer>
            <Heading>OPPONENT</Heading>
            <ResultImage src={oppentUrl} alt="opponent choice" />
          </YouAndOppentContainer>
        </GameResultContainer>
        <ResultContent>{gameResult}</ResultContent>
        <PlayAgainButton onClick={this.onClickPlayAgain}>
          Play Again
        </PlayAgainButton>
      </>
    )
  }

  render() {
    const {score, gameBoard} = this.state
    return (
      <GameContainer>
        <ScoreBoardContainer>
          <GameItemContaier>
            <GameHeading>ROCK</GameHeading>
            <GameHeading>PAPER</GameHeading>
            <GameHeading>SCISSORS</GameHeading>
          </GameItemContaier>
          <GameScoreContainer>
            <ScoreHeading>Score</ScoreHeading>
            <TotalScore>{score}</TotalScore>
          </GameScoreContainer>
        </ScoreBoardContainer>

        {gameBoard ? this.gameImageContainer() : this.gameResultContainer()}
        <PopupContainer>
          <Popup
            modal
            trigger={<PopupButton type="button"> Rules </PopupButton>}
          >
            {close => (
              <RulesContainer>
                <CloseButton type="button" onClick={() => close()}>
                  <RiCloseLine />
                </CloseButton>
                <RulesImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </RulesContainer>
            )}
          </Popup>
        </PopupContainer>
      </GameContainer>
    )
  }
}

export default GameField
