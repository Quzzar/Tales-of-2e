/* Copyright (C) 2021, by Quzzar
  This code is licensed under MIT license (see LICENSE for details)
*/

const REGEX_BOLD_BONUS = /(\<b\>(\w+)\<\/b\>) ((\+|\-|\−)\d+)/g;
// Groups: 0-match, 1-htmlLabel, 2-label, 3-bonus, 4-sign

LoadLoop();

function LoadLoop(){

  processGeneralText();

  setTimeout(LoadLoop, 1500);// 1.5 seconds
}

function processGeneralText(){

  $('span:not(.TSExtensionAttacksModified)').each(function() {

    let textHTML = $(this).html();

    textHTML = textHTML.replace(REGEX_BONUS, function(match, startSpace, label, bonus, sign, endSpace) {
      return startSpace+linkGenerator(bonus.trim(), true, label+' '+bonus, label)+endSpace;
    });

    textHTML = textHTML.replace(REGEX_DAMAGE, function(match, startSpace, diceText, diceNum, diceType, bonus, bonusLast, afterWord, afterWordOnly, endSpace) {
      return startSpace+linkGenerator(match.substring(startSpace.length), false, '', '');
    });

    $(this).html(textHTML);
    $(this).addClass('TSExtensionAttacksModified');

  });

  $('.main:not(.TSExtensionAttacksModified)').each(function() {
    
    let textHTML = $(this).html();

    textHTML = textHTML.replace(REGEX_BOLD_BONUS, function(match, htmlLabel, label, bonus, sign) {
      return linkGenerator(bonus.trim(), true, label+' '+bonus, label);
    });

    $(this).html(textHTML);
    $(this).addClass('TSExtensionAttacksModified');

  });

}