workspace {
    
    !identifiers hierarchical
    
    model {
    
        softwareSystem = softwareSystem "On-Premise"{
    
        
        dgctl = container "On-Premise" {
        
            cli = component "DGCLI" "Utility for getting artifacts for On-Premise deployment"
        
            s3 = component "S3 compatible storage" "" "" "storage"
            docker = component "Docker Registry" "" "" "storage"
            
            cli -> s3 "Stores installation artifacts at"
            cli -> docker "Stores servive docker images at and gets from"
            

            }
            

            internet = container "Internet" {
                update = component "Public update server" "Public servers to get and update service data" "" "external"
            }
            
            dgctl.cli -> internet.update "Downloads installation artifacts and license from"
            
            
        }
    
    }
    
    views {
    
        component softwareSystem.dgctl "components" {
            include element.type==component
            autolayout 
        }
        
        
       styles {
            element "Element" {
                background #1168bd
                color #ffffff
            }
            element "storage" {
                shape cylinder
                background #dddddd
                color #000000
            }
            element "external" {
                background green
                color white
                opacity 70
            }
            element "nfocus" {
                opacity 70
            }
        }
    }

}