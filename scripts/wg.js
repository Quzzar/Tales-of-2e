/* Copyright (C) 2021, by Quzzar
  This code is licensed under MIT license (see LICENSE for details)
*/

LoadLoop();

function LoadLoop(){

  processChecks();
  processGeneralText();

  setTimeout(LoadLoop, 1500);// 1.5 seconds
}

function processChecks() {

  $('.stat-roll-btn:not(.TSExtensionAttacksModified)').each(function() {
    
    let bonusText = $(this).text();
    let label = '';
    if($('#quickviewDefault').hasClass('is-active')){
      label = $('#quickViewTitle').html().split('<')[0];
    }

    $(this).html(linkGenerator(bonusText, true, '', label));
    
    $(this).addClass('TSExtensionAttacksModified');

  });

}


function processGeneralText(){

  let label = '';
  if($('#quickviewDefault').hasClass('is-active')){
    label = $('#quickViewTitle').html().split('<')[0];
  }

  $('span:not(.TSExtensionAttacksModified)').each(function() {

    let textHTML = $(this).html().replace(REGEX_DAMAGE, function(match, startSpace, diceText, diceNum, diceType, bonus, bonusLast, afterWord, afterWordOnly, endSpace) {
      return startSpace+linkGenerator(match.substring(startSpace.length), false, '', label);
    });
    if(textHTML != $(this).html()){
      $(this).html(textHTML);
    }
    $(this).addClass('TSExtensionAttacksModified');

  });
  

  $('p:not(.TSExtensionAttacksModified)').each(function() {

    let textHTML = $(this).html().replace(REGEX_DAMAGE, function(match, startSpace, diceText, diceNum, diceType, bonus, bonusLast, afterWord, afterWordOnly, endSpace) {
      return startSpace+linkGenerator(match.substring(startSpace.length), false, '', label);
    });
    if(textHTML != $(this).html()){
      $(this).html(textHTML);
    }
    $(this).addClass('TSExtensionAttacksModified');

  });

}