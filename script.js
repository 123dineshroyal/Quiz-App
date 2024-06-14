const question=[
		{
			'que' : 'Who invented Java Programming ?',
			'a' :'Guido van Rossum',
			'b' : 'James Gosling',
			'c' : 'Dennis Ritchie',
		    'd' : 'Bjarne Stroustrup',
		    'correct' : 'b'
		},
		{
			'que' : 'Which statement is true about Java ?',
			'a'   : 'Java is a sequence-dependent programming language.',
			'b'   : 'Java is a code dependent programming language.',
			'c'   : 'Java is a platform-dependent programming language.',
			'd'   : 'Java is a platform-independent programming language.',
		    'correct' : 'd'
		},
		{
			'que' : 'Which component is used to compile, debug and execute the java programs ?',
			'a'   : 'JRE',
			'b'   : 'JIT',
			'c'   : 'JDK',
			'd'   : 'JVM',
		    'correct' : 'c'
		},
		{
			'que' : 'Which one of the following is not a Java feature ?',
		    'a'   : 'Object-oriented',
    		'b'   : 'Use of pointers',
    		'c'   : 'Portable',
    		'd'   : 'Dynamic and Extensible',
		    'correct' : 'b'

		},
		{
			'que' : 'Which of these cannot be used for a variable name in Java ?',
    		'a'   : 'identifier & keyword',
    		'b'   : 'identifier',
    		'c'   : 'keyword',
    		'd'   : 'none of the mentioned',
		    'correct' : 'c'
		}
	]

let index=0;
let total=question.length;
let right=0;
let wrong=0;

const quesBox=document.getElementById('quesBox')

const optionInputs=document.querySelectorAll('.option')

const loadquestion = () =>{
	if(index===total)
	{
		return endQuiz();
	}	
	reset();
	const data = question[index];
	console.log(data)
	quesBox.innerText=`${index+1}) ${data.que}`;
	optionInputs[0].nextElementSibling.innerText=data.a
	optionInputs[1].nextElementSibling.innerText=data.b
	optionInputs[2].nextElementSibling.innerText=data.c
	optionInputs[3].nextElementSibling.innerText=data.d
}

const submitQuiz = () =>{

	const data = question[index];
	const ans=getAnswer()
	if(ans===data.correct)
	{
		right++
	}
	else
	{
		wrong++;
	}
	index++;
	loadquestion();
	return
}

const getAnswer = () =>{
	let answer;
	optionInputs.forEach((input) =>{
			if(input.checked){
				answer = input.value;
			}
			
	})
	return answer
}

const reset=()=>{
	optionInputs.forEach((input)=>{
		input.checked=false;
	})
}

const endQuiz= ()=>{
	document.getElementById("box").innerHTML=`
		<div style="text-align:center">
			<h3>Thank You for Playing the Quiz</h3>
			<h2>${right}/${total} are correct</h2>
		</div>	
		`
}
getAnswer()
//inital Calling
loadquestion()