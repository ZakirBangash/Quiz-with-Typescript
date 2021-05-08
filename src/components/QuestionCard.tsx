import React, { MouseEvent, useEffect } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { QuestionCardProp } from '../Types/quiz_types'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const QuestionCard: React.FC<QuestionCardProp> = ({ question, options, callback, indexofQuestion, showResult,score }) => {

    const [selectedIndex, setSelectedIndex] = React.useState(-1);
    const [selectedOption, setSelectedOption] = React.useState('')

    const handleListItemClick = (
        event: MouseEvent,
        index: number,
    ) => {
        setSelectedIndex(index);
        const input = event.target as HTMLElement;
        setSelectedOption(input.innerText);
    };
    useEffect(() => {
        setSelectedIndex(-1)
    }, [indexofQuestion])


    let button;
    if (indexofQuestion !== 4) {
        button = <Button disabled={selectedIndex > -1 ? false : true} onClick={() => callback(selectedOption)} className="next-btn">Next</Button>
      } else {
        button =   <Button disabled={selectedIndex > -1 ? false : true} onClick={() => callback(selectedOption)} className="next-btn">Submit</Button>
      }
  
    return (
        <Card className="card">
            <CardContent className="cardContent">
                {showResult?
                <h1 className="result">Your Score is {score} out of 5</h1>
                :
                <>
                <div className="card-left">
                <h1>Question {indexofQuestion + 1}<small>/5</small></h1>
                <h3 className="question">{question}</h3>
            </div>
            <div className="card-right">
                {options?.map((opt: string, ind: number) => (
                    <List component="nav" aria-label="main mailbox folders">
                        {console.log("this is array ", ind)}
                        {console.log("this is selected one ", selectedIndex)}
                        <ListItem
                            button
                            selected={selectedIndex === ind}
                            onClick={(event) => handleListItemClick(event, ind)}
                        >
                            <ListItemText primary={opt} />
                        </ListItem>
                    </List>
                ))}
            </div>
            </>
            }
            </CardContent>
            <CardActions>
                {!showResult ? button : ''}
            </CardActions>
        </Card>
    )
}

export default QuestionCard

