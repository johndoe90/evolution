#!/bin/bash

CLOSURE_DIR="closure"

CLOSURE_LIBRARY_DIR="closure-library"
GIT_CLOSURE_LIBRARY="https://github.com/google/closure-library.git"

CLOSURE_COMPILER_DIR="closure-compiler"
GIT_CLOSURE_COMPILER="https://github.com/google/closure-compiler.git"

#create or update closure library
function init_closure_library {
	if [ ! -d $CLOSURE_LIBRARY_DIR ]; then
		git clone $GIT_CLOSURE_LIBRARY
	else
		cd $CLOSURE_LIBRARY_DIR
		git pull
		cd ".."	
	fi
}

#create or update closure compiler and build it
function init_closure_compiler {
	if [ ! -d $CLOSURE_COMPILER_DIR ]; then
		git clone $GIT_CLOSURE_COMPILER
	fi
	
	cd $CLOSURE_COMPILER_DIR	
	git pull
	
	#build the compiler	
	ant

	cd ".."
}

if [ ! -d $CLOSURE_DIR ]; then
	mkdir $CLOSURE_DIR
fi

cd $CLOSURE_DIR

init_closure_library
init_closure_compiler

