//
//  ViewController.m
//  tableTest
//
//  Created by Nathan Hull
//  Copyright (c) 2019 NYU. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

///////////////// #2  PROPERTY FOR ARRAY

@property (copy, nonatomic) NSArray *greekAlpha;



@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
  
    
    ///////////////// #3   CREATE ARRAY
    ///////////////// #3
    
    
    self.greekAlpha = @[@"Alpha", @"Beta",
                        @"Gamma", @"Delta", @"Epsilon", @"Zeta", @"Eta", @"Theta",
                        @"Iota", @"Kappa", @"Lamda", @"Mu", @"Nu", @"Xi", @"Omicron",
                        @"Pi", @"Rho", @"Sigma", @"Tau", @"Upsilon"];
    
    
    ///////////////// #4  CREATE TABLE VIEW AND CONTENT INSET
    
  
 
 } // end viewdidload

///////////////// #5

- (NSInteger)tableView:(UITableView *)tableView
 numberOfRowsInSection:(NSInteger)section
{
    return [self.greekAlpha count];
}

///////////////// #5  DELEGATE - SET NUM OF ROWS
///////////////// #6





///////////////// #6  DELEGATE - GIVE BACK A CELL

- (UITableViewCell *)tableView:(UITableView *)tableView
         cellForRowAtIndexPath:(NSIndexPath *)indexPath
{
    

    ///////////////// #7  CREATE OR REUSE A CELL    ///////////////// #7
    
    static NSString *SimpleTableIdentifier = @"SimpleTableIdentifier";
    
    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:
                             
                             SimpleTableIdentifier];
    if (cell == nil) {
        cell = [[UITableViewCell alloc]
                initWithStyle:UITableViewCellStyleDefault
                reuseIdentifier:SimpleTableIdentifier];
    }
  
    ///////////////// #8   SET CELL TEXT
    
    ///////////////// #8
    
    cell.textLabel.text = self.greekAlpha[indexPath.row];
    

    //////////////////  #9 SET CELL TEXT COLOR
  
    
    cell.textLabel.textColor = [UIColor redColor];
   
    
    
    ////////////////  #10
    UIImage *myImage = [UIImage imageNamed:@"torch2.png"];
    cell.imageView.image = myImage;
    
     return cell;
    
    ////////////////  #10  ADD A PICTURE
   
    

 
}   // end of cellForRowAtIndexPath:


-(CGFloat) tableView:(UITableView *) tableView heightForRowAtIndexPath:(nonnull NSIndexPath *)indexPath{
    return 80;
}



@end
